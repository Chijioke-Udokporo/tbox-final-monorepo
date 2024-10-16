-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_favorites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "trailerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "favorites_trailerId_fkey" FOREIGN KEY ("trailerId") REFERENCES "trailers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_favorites" ("createdAt", "id", "trailerId", "updatedAt", "userId") SELECT "createdAt", "id", "trailerId", "updatedAt", "userId" FROM "favorites";
DROP TABLE "favorites";
ALTER TABLE "new_favorites" RENAME TO "favorites";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

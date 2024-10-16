-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_casts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_casts" ("createdAt", "id", "image", "name", "updatedAt") SELECT "createdAt", "id", "image", "name", "updatedAt" FROM "casts";
DROP TABLE "casts";
ALTER TABLE "new_casts" RENAME TO "casts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

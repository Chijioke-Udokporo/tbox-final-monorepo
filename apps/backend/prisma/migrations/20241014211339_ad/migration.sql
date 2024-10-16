-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_trailers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "mediaId" TEXT NOT NULL,
    "poster" TEXT,
    "alias" TEXT,
    "releaseDate" DATETIME,
    "director" TEXT,
    "runtime" TEXT,
    "rating" TEXT,
    "plot" TEXT,
    "tomatometer" TEXT,
    "audienceScore" TEXT,
    "genre" TEXT,
    "casts" TEXT,
    "writers" TEXT,
    "isPublished" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_trailers" ("alias", "audienceScore", "casts", "createdAt", "director", "genre", "id", "isPublished", "mediaId", "plot", "poster", "rating", "releaseDate", "runtime", "title", "tomatometer", "updatedAt", "writers") SELECT "alias", "audienceScore", "casts", "createdAt", "director", "genre", "id", "isPublished", "mediaId", "plot", "poster", "rating", "releaseDate", "runtime", "title", "tomatometer", "updatedAt", "writers" FROM "trailers";
DROP TABLE "trailers";
ALTER TABLE "new_trailers" RENAME TO "trailers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

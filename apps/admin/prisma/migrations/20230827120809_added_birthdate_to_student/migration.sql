-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InformationStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "profileImageLink" TEXT,
    "nativeLanguage" INTEGER,
    "learningLanguages" INTEGER,
    "remainingPurchase" INTEGER NOT NULL DEFAULT 0,
    "remainingDemo" INTEGER NOT NULL DEFAULT 2,
    "rootUserId" INTEGER NOT NULL,
    "birthdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "InformationStudent_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationStudent" ("createdAt", "firstName", "id", "lastName", "learningLanguages", "nativeLanguage", "profileImageLink", "remainingDemo", "remainingPurchase", "rootUserId", "updatedAt") SELECT "createdAt", "firstName", "id", "lastName", "learningLanguages", "nativeLanguage", "profileImageLink", "remainingDemo", "remainingPurchase", "rootUserId", "updatedAt" FROM "InformationStudent";
DROP TABLE "InformationStudent";
ALTER TABLE "new_InformationStudent" RENAME TO "InformationStudent";
CREATE UNIQUE INDEX "InformationStudent_rootUserId_key" ON "InformationStudent"("rootUserId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

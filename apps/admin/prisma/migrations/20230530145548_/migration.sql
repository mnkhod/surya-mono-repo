-- CreateTable
CREATE TABLE "InformationStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT
);

-- CreateTable
CREATE TABLE "InformationTutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "shortInfo" TEXT,
    "videoLink" TEXT,
    "profileImageLink" TEXT
);

-- CreateTable
CREATE TABLE "InformationAdmin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT
);

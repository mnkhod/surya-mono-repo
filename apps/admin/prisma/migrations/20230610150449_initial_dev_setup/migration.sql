-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "isTutor" BOOLEAN NOT NULL,
    "isStudent" BOOLEAN NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "InformationStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "profileImageLink" TEXT,
    "nativeLanguage" INTEGER,
    "learningLanguages" INTEGER,
    "remainingPurchase" INTEGER,
    "rootUserId" INTEGER NOT NULL,
    CONSTRAINT "InformationStudent_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InformationTutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rootUserId" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "shortInfo" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "profileImageLink" TEXT,
    "nativeLanguage" INTEGER,
    "teachingLanguages" INTEGER,
    CONSTRAINT "InformationTutor_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InformationAdmin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "rootUserId" INTEGER NOT NULL,
    CONSTRAINT "InformationAdmin_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ConfigLanguages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "flagSVGLink" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "InformationStudent_rootUserId_key" ON "InformationStudent"("rootUserId");

-- CreateIndex
CREATE UNIQUE INDEX "InformationTutor_rootUserId_key" ON "InformationTutor"("rootUserId");

-- CreateIndex
CREATE UNIQUE INDEX "InformationAdmin_rootUserId_key" ON "InformationAdmin"("rootUserId");

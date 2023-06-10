-- CreateTable
CREATE TABLE "ConfigLanguages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "flagSVGLink" TEXT NOT NULL,
    "tutorNativeLanguageId" INTEGER NOT NULL,
    CONSTRAINT "ConfigLanguages_tutorNativeLanguageId_fkey" FOREIGN KEY ("tutorNativeLanguageId") REFERENCES "InformationTutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TutorTeachingLanguages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TutorTeachingLanguages_A_fkey" FOREIGN KEY ("A") REFERENCES "ConfigLanguages" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TutorTeachingLanguages_B_fkey" FOREIGN KEY ("B") REFERENCES "InformationTutor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfigLanguages_tutorNativeLanguageId_key" ON "ConfigLanguages"("tutorNativeLanguageId");

-- CreateIndex
CREATE UNIQUE INDEX "_TutorTeachingLanguages_AB_unique" ON "_TutorTeachingLanguages"("A", "B");

-- CreateIndex
CREATE INDEX "_TutorTeachingLanguages_B_index" ON "_TutorTeachingLanguages"("B");

-- CreateTable
CREATE TABLE "AppUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "password" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_name_key" ON "AppUser"("name");

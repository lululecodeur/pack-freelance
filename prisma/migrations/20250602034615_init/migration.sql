-- CreateTable
CREATE TABLE "Freelance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "objectifMensuel" INTEGER NOT NULL,
    "joursParMois" INTEGER NOT NULL,
    "tjmCalcule" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Freelance_email_key" ON "Freelance"("email");

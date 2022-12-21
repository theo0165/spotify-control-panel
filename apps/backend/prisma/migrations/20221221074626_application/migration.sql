-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

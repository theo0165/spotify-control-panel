-- CreateTable
CREATE TABLE "qrToken" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "qrToken_pkey" PRIMARY KEY ("id")
);

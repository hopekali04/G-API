/*
  Warnings:

  - Added the required column `amount` to the `Expenditure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Expenditure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expenditure` ADD COLUMN `amount` DOUBLE NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Accomodation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentid` INTEGER NOT NULL,
    `roomid` INTEGER NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `term` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

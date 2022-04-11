-- CreateTable
CREATE TABLE `Keluarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_induk` VARCHAR(191) NOT NULL,
    `no_kk` VARCHAR(16) NULL,
    `no_nik` VARCHAR(16) NULL,
    `address` VARCHAR(191) NULL,
    `is_registered` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Keluarga_no_induk_key`(`no_induk`),
    UNIQUE INDEX `Keluarga_no_kk_key`(`no_kk`),
    UNIQUE INDEX `Keluarga_no_nik_key`(`no_nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

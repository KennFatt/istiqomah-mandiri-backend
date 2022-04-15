-- CreateTable
CREATE TABLE `Keluarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_induk` VARCHAR(191) NOT NULL,
    `no_kk` VARCHAR(16) NULL,
    `no_nik` VARCHAR(16) NULL,
    `address` VARCHAR(191) NULL,
    `is_registered` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Keluarga_no_induk_key`(`no_induk`),
    UNIQUE INDEX `Keluarga_no_kk_key`(`no_kk`),
    UNIQUE INDEX `Keluarga_no_nik_key`(`no_nik`),
    INDEX `Keluarga_no_induk_idx`(`no_induk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnggotaKeluarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `is_alive` BOOLEAN NOT NULL,
    `birth_date` DATETIME(3) NULL,
    `death_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `keluarga_id` INTEGER NOT NULL,
    `is_kepala_keluarga` BOOLEAN NOT NULL DEFAULT false,

    INDEX `AnggotaKeluarga_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnggotaKeluarga` ADD CONSTRAINT `AnggotaKeluarga_keluarga_id_fkey` FOREIGN KEY (`keluarga_id`) REFERENCES `Keluarga`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `AnggotaKeluarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `keluarga_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `is_alive` BOOLEAN NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `death_date` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AnggotaKeluarga_keluarga_id_key`(`keluarga_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnggotaKeluarga` ADD CONSTRAINT `AnggotaKeluarga_keluarga_id_fkey` FOREIGN KEY (`keluarga_id`) REFERENCES `Keluarga`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

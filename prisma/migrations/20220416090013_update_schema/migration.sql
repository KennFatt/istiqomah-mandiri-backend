-- AlterTable
ALTER TABLE `AnggotaKeluarga` ADD COLUMN `covered_at` DATETIME(3) NULL,
    ADD COLUMN `is_covered` BOOLEAN NULL,
    MODIFY `phone_number` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Keluarga` ADD COLUMN `registered_at` DATETIME(3) NULL;

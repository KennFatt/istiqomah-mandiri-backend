-- AlterTable
ALTER TABLE `AnggotaKeluarga` ADD COLUMN `is_kepala_keluarga` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX `AnggotaKeluarga_name_idx` ON `AnggotaKeluarga`(`name`);

-- CreateIndex
CREATE INDEX `Keluarga_no_induk_idx` ON `Keluarga`(`no_induk`);

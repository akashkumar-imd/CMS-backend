-- AlterTable
ALTER TABLE `order_details_logs` MODIFY `volume` DECIMAL(65, 30) NOT NULL,
    MODIFY `payout` DECIMAL(65, 30) NOT NULL;

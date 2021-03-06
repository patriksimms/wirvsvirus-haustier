import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { Offer } from './offer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  providers: [OfferService],
  controllers: [OfferController],
})
export class OfferModule {
}

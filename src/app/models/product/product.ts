import {EProductStatuses} from '@constants/product-statuses';

export interface IProduct {
  title: string;
  subtitle: string;
  image: string;
  creationDate: Date;
  status: EProductStatuses;
}

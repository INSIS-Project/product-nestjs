import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { RabbitProducer } from './producer';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

let index = 0;
const product = {
  productID: 'id-fake',
  sku: 'sku-fake',
  designation: 'designation-fake',
  description: 'description-fake',
  index,
};

const pro = RabbitProducer();

function createProductData(): any {
  // eslint-disable-next-line no-plusplus
  index++;
  product.index = index;
  return product;
}

app.get('/', (req, res) => {
  const data = createProductData();
  pro(data);
  res.send('welcome to rabbit');
});

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));

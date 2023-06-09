import stripe from '../../../config/stripe';

const CreateCustomer = ({
  name, email, source, metaData
}) =>  stripe.customers.create({
        description: name,
        name,
        email,
        source,
        metadata: metaData,
      });

export default CreateCustomer;

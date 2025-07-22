import { useState } from 'react';

// API
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@services/fetchData';

// Components
import Container from '@components/UiKit/Container/Container';
import Heading from '@components/UiKit/Heading/Heading';
import Text from '@components/UiKit/Text/Text';
import Image from '@components/UiKit/Image/Image';
import NotificationBox from '@components/UiKit/NotificationBox/NotificationBox';
import FormField from '@components/UiKit/FormField/FormField';
import Select from '@components/UiKit/Select/Select';
import Input from '@components/UiKit/Input/Input';
import Button from '@components/UiKit/Button/Button';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchData,
  });

  // Example of Input update
  const onInputChange = (val: string) => {
    setInputValue(val);
  };

  // Example of Select update
  const onSelectChange = (val: string) => {
    setSelectValue(val);
  };

  // Example of form submit
  const onSubmitForm = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log('form submitted!', inputValue, selectValue);
  };

  // Loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error || !data) {
    return <p>There was an error! {JSON.stringify(error || '')}</p>;
  }

  return (
    <Container $pushTop={[3, 3, 3]} $pushBottom={[3, 3, 3]}>
      <Heading>Homepage</Heading>
      <Text>Hello! here's some text to get started with</Text>
      <Image src="https://placecats.com/300/200" $rounded />
      <NotificationBox $variant="danger">This is an error!</NotificationBox>

      {/* Basic form */}
      <form onSubmit={onSubmitForm}>
        <FormField>
          <Text>Please fill out this form</Text>
        </FormField>
        <FormField>
          <Input
            value={inputValue}
            placeholder="Test placeholder"
            onValueChange={onInputChange}
          />
        </FormField>
        <FormField>
          <Select
            value={selectValue}
            label="Please choose an option"
            options={[
              { label: 'Cake', value: 'cake' },
              { label: 'Bread', value: 'bread' },
            ]}
            onValueChange={onSelectChange}
          />
        </FormField>
        <FormField>
          <Button disabled={!inputValue || !selectValue} onClick={onSubmitForm}>
            Submit
          </Button>
        </FormField>
      </form>
    </Container>
  );
}

export default Home;

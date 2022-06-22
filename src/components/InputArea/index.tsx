import { Item } from '../../types/Item';
import * as C from './styles';
import { categories } from '../../data/categories';
import { useState } from 'react';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  let categoryKeys: string[] = Object.keys(categories);

  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
    <C.Container>
      <C.InputGroup>
        <C.Label htmlFor="date">Data</C.Label>
        <C.Input type="date" id="date" value={dateField} onChange={e => setDateField(e.target.value)} />
      </C.InputGroup>

      <C.InputGroup>
        <C.Label htmlFor="category">Categoria</C.Label>
        <C.Select value={categoryField} name="category" id="category" onChange={e => setCategoryField(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </C.Select>
      </C.InputGroup>

      <C.InputGroup>
        <C.Label htmlFor="title">Título</C.Label>
        <C.Input type="text" id="title" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputGroup>

      <C.InputGroup>
        <C.Label htmlFor="value">Valor</C.Label>
        <C.Input type="number" id="value" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputGroup>

      <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
    </C.Container>
  );
}
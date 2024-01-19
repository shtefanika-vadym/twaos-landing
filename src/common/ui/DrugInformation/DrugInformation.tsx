import type { SelectValue } from '@/types/CollectInterface';
import { DrugProps } from '@/types/collect';
import { PRIVACY_BOX } from 'common/constants/steps';
import { DROPDOWN_VALUES } from 'common/mockData/mockData';
import { Button } from 'common/ui/Button/Button';
import { Dropdown } from 'common/ui/Dropdown/Dropdown';
import { Input } from 'common/ui/Input/Input';
import { initialDrug } from 'components/collect/Collect.config';
import { gt } from 'lodash-es';
import type { ChangeEvent } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { PrivacyBox } from '../PrivacyBox/PrivacyBox';
import { Select } from '../Select/Select';
import {
  AddNewWrapper,
  DrugInformationWrapper,
  Error,
  FormWrapper,
  InputWrapper,
  MultiFormWrapper,
  Psycholeptic,
} from './DrugInformation.styled';

interface DrugInformationProps {
  drugList: DrugProps[];
  setDrugList: (drugList: DrugProps[]) => void;
  isLastDrugValid: boolean;
}

export const DrugInformation: React.FC<DrugInformationProps> = ({
  drugList,
  setDrugList,
  isLastDrugValid,
}) => {
  const [error, setError] = useState<string>('');

  const handleInputChange = useCallback(
    (values: ChangeEvent<HTMLInputElement>, key: number) => {
      const { name, value } = values.target;
      setDrugList(
        drugList.map((drug, i) =>
          i === key ? { ...drug, [name]: value } : drug
        )
      );
    },
    [drugList, setDrugList]
  );

  const handleSelector = useCallback(
    (value: SelectValue | string, key: number, keyValue: string) => {
      setDrugList(
        drugList.map((drug, i) =>
          i === key ? { ...drug, [keyValue]: value } : drug
        )
      );
    },
    [drugList, setDrugList]
  );

  const handleAddNewDrugForm = useCallback(() => {
    if (isLastDrugValid) {
      setDrugList([...drugList, initialDrug]);
    } else {
      setError(
        'Pentru a adăuga un medicament nou, completează toate câmpurile.'
      );
    }
  }, [isLastDrugValid, setDrugList, drugList]);

  const handleDeleteDrug = useCallback(
    (index: number) => {
      const newArray = [...drugList];
      newArray.splice(index, 1);
      setDrugList(newArray);
    },
    [drugList, setDrugList]
  );

  useEffect(() => {
    if (isLastDrugValid) setError('');
  }, [isLastDrugValid]);

  return (
    <DrugInformationWrapper>
      <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_2} />
      <MultiFormWrapper>
        {Array.from({ length: drugList?.length }, (_, index) => (
          <FormWrapper key={index}>
            <InputWrapper>
              <Select
                onSelect={(value: SelectValue) =>
                  handleSelector(value, index, 'drugName')
                }
                value={drugList[index]?.drugName}
                isDeleteButtonActive={gt(drugList?.length, 1)}
                onDelete={() => handleDeleteDrug(index)}
              />
              {drugList[index]?.drugName.isPsycholeptic && (
                <Psycholeptic>
                  Te informăm că medicamentul este de tip psihotrop. Procesul de
                  colectare va fi un pic diferit.
                </Psycholeptic>
              )}
            </InputWrapper>
            <Dropdown
              name="pack"
              placeholder="Cutie"
              label="Tipul de ambalaj *"
              selectedOptions={drugList[index]?.pack}
              options={DROPDOWN_VALUES}
              callbackOnChange={(pack) => handleSelector(pack, index, 'pack')}
            />
            <InputWrapper>
              <Input
                name="quantity"
                type="number"
                label="Cantitatea *"
                value={drugList[index]?.quantity}
                onChange={(e) => handleInputChange(e, index)}
              />
            </InputWrapper>
          </FormWrapper>
        ))}
      </MultiFormWrapper>
      <AddNewWrapper>
        <Button variant="secondary" onClick={handleAddNewDrugForm}>
          Adaugă alt medicament
        </Button>
        {error && <Error>{error}</Error>}
      </AddNewWrapper>
    </DrugInformationWrapper>
  );
};

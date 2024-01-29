import { Metadata } from 'common/Metadata/Metadata';
import { usePageLoadDetailsAnalytics } from 'common/hooks/usePageLoadDetailsAnalytics';
import { CollectHeader } from 'common/layout/CollectHeader/CollectHeader';
import { Success } from 'components/success/Success';

export const SuccessPage = () => {
  usePageLoadDetailsAnalytics({ pageType: 'succes page' });

  return (
    <Metadata
      title="DrugBin"
      description="Descoperiți centrele din apropiere pentru eliminarea în siguranță a medicamentelor expirate sau neutilizate. Alăturați-vă mișcării pentru o comunitate mai curată."
    >
      <CollectHeader>
        <Success />
      </CollectHeader>
    </Metadata>
  );
};

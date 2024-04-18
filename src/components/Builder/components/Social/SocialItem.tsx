import { useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../../helpers/constants";
import { Accordion } from "../../../../shared-components/Accordion";
import { IconButtonDelete } from "../../../../shared-components/Buttons/Buttons";

interface ItemProps {
  index: number;
  handleDelete: (index: number) => void;
}

export const SocialItem: React.FC<ItemProps> = ({ index, handleDelete }: ItemProps) => {
  const socialName = useWatch({
    name: `social.${index}.label`,
  });
  const link = useWatch({
    name: `social.${index}.link`,
  });

  const status = socialName ? false : true;

  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={socialName} description={link} status={status}>
        <div className="flex flex-col gap-4">
          <CustomInput name={`social.${index}.label`} label={CV_FIELDS.social} />
          <CustomInput name={`social.${index}.link`} label={CV_FIELDS.link} />
          <hr className="h-0.5" />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};

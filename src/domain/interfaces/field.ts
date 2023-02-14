interface IItem {
  component: string;
  label: string;
  placeholder: string | undefined;
  required: boolean | undefined;
  name: string;
  value: string;
  type: string;
  title: string;
  dependencies: { name: string, value: string}[];
}

interface IField {
  label: string;
  placeholder: string | undefined;
  required: boolean | undefined;
  name: string;
  prefixName: string;
  value: string;
  type: string;
  title: string;
  options: string[];
  inputs: IItem[];
  dependencies: { name: string, value: string}[];
}

export default IField

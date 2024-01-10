export interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  type?: string;
  name?: string;
  className?: string;
  required?: boolean;
}
export type ButtonProps = {
  onSubmit?: React.MouseEventHandler<HTMLElement>;
  title: string;
  className?: string;
  loading?: boolean;
};

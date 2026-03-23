declare module "*.svg" {
  type SvgComponent = (props: React.SVGProps<SVGSVGElement>) => SVGElement;
  export const ReactComponent: SvgComponent;
  const content: string;
  export default content;
}

export interface INavigationItem {
  href: string;
  text: string;
  icon: () => React.JSX.Element;
}

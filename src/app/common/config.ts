import AboutIcon from '../components/icons/AboutIcon';
import ContactMeIcon from '../components/icons/ContactMeIcon';
import GithubIcon from '../components/icons/GitHubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import ProjectsIcon from '../components/icons/ProjectsIcon';
import { INavigationItem } from './types/config';

export const internalNavigationItems: INavigationItem[] = [
  {
    href: '#projects',
    text: 'Projects',
    icon: ProjectsIcon,
  },
  {
    href: '/about',
    text: 'About',
    icon: AboutIcon,
  },
  {
    href: '/contact',
    text: 'Contact',
    icon: ContactMeIcon,
  },
];

export const externalNavigationItems: INavigationItem[] = [
  {
    href: 'https://linkedin.com/in/travisallen6',
    text: '',
    icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/travisallen6',
    text: '',
    icon: GithubIcon,
  },
];

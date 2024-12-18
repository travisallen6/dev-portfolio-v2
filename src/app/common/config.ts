import AboutIcon from '../components/icons/AboutIcon';
import ContactMeIcon from '../components/icons/ContactMeIcon';
import GithubIcon from '../components/icons/GitHubIcon';
import HomeIcon from '../components/icons/HomeIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import ProjectsIcon from '../components/icons/ProjectsIcon';
import { INavigationItem, IProject } from './types/config';

const internalNavigationItems: INavigationItem[] = [
  {
    href: '/',
    text: 'Home',
    icon: HomeIcon,
  },
  {
    href: '/projects',
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

export const getInternalNavigationItems = (
  currentPathname: string
): INavigationItem[] =>
  internalNavigationItems.filter(({ href }) => href !== currentPathname);

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

export const projects: IProject[] = [
  {
    title: 'TravisAllen.dev',
    description:
      'This is the second version of my personal portfolio site. Currently, it showcases some of the projects I have worked on and provides a way to contact me. In the future, I may add a blog and other interactive features.',
    image: {
      src: '/projects/travisallendotdev.png',
      alt: 'Screenshot of TravisAllen.dev',
      width: 500,
      height: 436,
    },
    techUsed: [
      'React',
      'TypeScript',
      'CSS Modules',
      'Next.js',
      'Node.js',
      'Jest',
      'React Testing Library',
    ],
    githubLink: 'https://github.com/travisallen6/dev-portfolio-v2',
    demoLink: 'https://travisallen.dev',
  },
];

const techUsedUrlMap: Record<string, string> = {
  React: 'https://reactjs.org/',
  TypeScript: 'https://www.typescriptlang.org/',
  'CSS Modules': 'https://github.com/css-modules/css-modules',
  'Next.js': 'https://nextjs.org/',
  'Node.js': 'https://nodejs.org/',
  Jest: 'https://jestjs.io/',
  'React Testing Library': 'https://testing-library.com/',
};

export const getTechUsedUrl = (techItem: string): string => {
  const url = techUsedUrlMap[techItem];

  if (!url) {
    throw new Error(
      `Tech item ${techItem} does not have a corresponding URL defined in the config file.`
    );
  }

  return url;
};

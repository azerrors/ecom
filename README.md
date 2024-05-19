# NovoPharm E-Commerce Frontend
Frontend of NovoPharm E-commerce web app. Built with Next.Js, React, TypeScript, and a bunch of other tools (more information below)

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── assets                      # Assets folder
│   │   └── styles                  # Styles folder
│   ├── utils                       # Utilities folder
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
└── tsconfig.json                   # TypeScript configuration
```

### Requirements
- Node.js 18+ and npm

### Getting started

Clone the repo with the command of:
```shell
git clone https://github.com/Novopharm/ecommerce-frontend.git
```

Then, you can run the project locally in development mode with live reload by executing:
```shell
npm run dev
```
Open http://localhost:3000 with your favorite browser to see your project.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All unit tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Jest and React Testing Library for unit testing. You can run the tests with:

```shell
npm run test
```

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

### Contributions
Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.
Please refer to [Version Management](https://avromed.atlassian.net/wiki/x/yoI) page in Confluence for more information about how to contribute.

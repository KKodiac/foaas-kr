# FOAAS-KR

[FOAAS](https://github.com/tomdionysus/foaas) 의 한글 버전 입니다. 하루에 있었던 열받는 일들을 API로 제공해보세요

[FOAAS](https://github.com/tomdionysus/foaas) fork for Koreans to utilize for their stress management.

# Installation

	npm install

# Run

	npm start

# Test

	npm test

# Docker

	docker build -t foaas:1 .
    docker run -v $(pwd):/usr/src/app -p 5000:5000 foaas:1

<!-- # Clients

API clients are available in a number of languages:

| Language | Name           | Info                                           |
|:---------|:---------------|:-----------------------------------------------|
| JS/Node  | `foaas-client` | https://www.npmjs.org/package/foaas-client     |
| Ruby     | `foaas-client` | https://github.com/petedmarsh/foaas-client     |
| PHP      | `foaas-php`    | https://github.com/klaude/foaas-php            |
| Python   | `foaas-python` | https://github.com/dmpayton/foaas-python       |
| Python   | `foaap`        | https://github.com/ilhomidin/foaap             |
| R        | `rfoaas`       | https://github.com/eddelbuettel/rfoaas         |
| CLI/bash | `foaas.sh`     | https://github.com/RaymiiOrg/foaas.sh          |
| CLI      | `foass-cli`    | https://github.com/palash25/foaas-cli          |
| .NET     | `FOAASClient`  | https://github.com/igorkulman/FOAASClient      |
| .NET Core| `foaas-dotnet` | https://github.com/Zuev-Alexander/foaas-dotnet |
| Java     | `JFOAAS`       | https://github.com/SSederberg/FOAAS-Java       |
| Go       | `go-fuck-off`  | https://godoc.org/github.com/ds0nt/go-fuck-off |
| Erlang   | `foaas-erlang` | https://github.com/rikribbers/foaas-erlang     |
| Crystal  | `foaas_client` | https://github.com/mamantoha/foaas_client      |
| Rust     | `foaas-rs`     | https://github.com/jilsahm/foaas-rs            |

# GUI Clients

| Platform          | Info                                                    |
|:------------------|:--------------------------------------------------------|
| Web               | https://github.com/hamza1311/fuck-off                   |


# Framework Support

| Framework     | Info                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| [Polymer](https://www.polymer-project.org/) | https://github.com/benfonty/fooas-element                                    |
| [React](https://reactjs.org/) | https://github.com/circa10a/react-foaas-card                                   	     |

# Integrate FOAAS

| Platform/Software     | Name                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| Thunderbird/Seamonkey                       | https://addons.mozilla.org/en-US/seamonkey/addon/qfo-quick-fuck-off          |
| TelegramBot                                 | https://github.com/rajanand02/TelegramFoaasBot                               |
| Slack                                       | https://github.com/revmischa/foaas-slack                                     |
| Amazon Echo                                 | https://www.amazon.com/dp/B01LZLFTMQ/ (source available [here](https://github.com/martinschaef/foaas-alex))|
| Terraform Provider                          | https://github.com/m13t/terraform-provider-foac                              | -->

# Contributing

## 새로운 열받은 일을 추가하는 방법

FOAAS-KR에 오늘 하루 있었던 열받음을 추가해보세요:

1. 개인 레포로 포크하세요.
2. Feature branch 를 생성하세요: `feature/your_operation`
3. `/lib/operations` 안에 새로운 열받음 파일을 추가하세요.
4. `/spec/operations` 안에 새로 생성한 열받은 일들에 대한 예외들을 추가해 주세요. 없으면 추가 안해드려용.
5. 개인 포크로 푸쉬 한 후 PR을 생성 해주세요.

모든 Contribution은 환영입니다.🤗

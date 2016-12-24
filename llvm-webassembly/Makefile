ROOT := $(shell /bin/pwd)
OS = $(shell /bin/uname)
$(info PWD: $(PWD))
$(info USER $(HOME))
ifeq ($(OS),CYGWIN_NT-6.1-WOW)
       DOCKER = $(HOME)/.winpty/winpty.exe docker.exe
else
       DOCKER = docker
endif


NS = chrisber
VERSION ?= latest

REPO = llvm-webassembly
NAME = generate-wasm
INSTANCE = default

.PHONY: help 


help:
	@grep -h -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


build: ## Builds the container
	$(DOCKER) build -t $(NS)/$(REPO):$(VERSION) -f Dockerfile .

shell: ## Run shell 
	$(DOCKER) run --tty=true --rm --name $(NAME)-$(INSTANCE)   -i -t $(NS)/$(REPO):$(VERSION)  /bin/bash

run: ## Run the container with --rm 
	$(DOCKER) run --tty=true --rm --name $(NAME)-$(INSTANCE)  $(NS)/$(REPO):$(VERSION)

stop: ## Stops a running container
	docker stop $(NAME)-$(INSTANCE)

rm: ## Deletes a container
	docker rm $(NAME)-$(INSTANCE)

rebuild: ## Rebuilds an image from scretch
	$(DOCKER) build --no-cache -t $(NS)/$(REPO):$(VERSION) -f Dockerfile .

pull: ## Download image
	$(DOCKER) pull $(NS)/$(REPO)

push: ## Push image to DockerHub
	$(DOCKER) push $(NS)/$(REPO)

default: help

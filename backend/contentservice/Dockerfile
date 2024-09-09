FROM python:3.12-slim-bookworm

# read this from config file eventually 
ENV ENV=development

# Don't need to create venvs in container as it's already isolated.
ENV ENV=${ENV} \
  PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  # Poetry's configuration:
  POETRY_NO_INTERACTION=1 \
  POETRY_VIRTUALENVS_CREATE=false \
  POETRY_CACHE_DIR='/var/cache/pypoetry' \
  POETRY_HOME='/usr/local' \
  POETRY_VERSION=1.8.3

# install poetry onto box
RUN apt-get update && apt-get install -y curl \
    && curl -sSL https://install.python-poetry.org | python3 - \
    && apt-get clean

ENV PATH="/root/.local/bin:$PATH"

# Copy only requirements to cache them in docker layer
WORKDIR /code
COPY poetry.lock* pyproject.toml /code/

RUN poetry install $(test "$ENV" == production && echo "--only=main") --no-interaction --no-ansi

COPY ./app /code/app

EXPOSE 8000

CMD ["poetry", "run", "uvicorn", "app.content:app", "--host", "0.0.0.0", "--port", "8000"]

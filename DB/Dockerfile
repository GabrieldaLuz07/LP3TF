FROM postgres:16.2

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD masterkey
ENV POSTGRES_DB gymdb
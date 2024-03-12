FROM alpine:3.18.4 as builder
WORKDIR /application

EXPOSE 3000
COPY --from=grafana/k6:0.47.0 /usr/bin/k6 /usr/bin/k6
RUN apk add vim bash
COPY ./ /application/

FROM builder AS dev
CMD ["sh", "-c", "tail -f /dev/null"]

FROM builder AS test
CMD ["sh", "-c", "tail -f /dev/null"]

FROM builder AS prod
CMD ["sh", "-c", "tail -f /dev/null"]

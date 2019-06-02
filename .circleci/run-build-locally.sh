#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=143f5f23cbc43b7ca0e39171b20dac7e9b3c7e5b\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/https://github.com/alvinhtml/alvinblog.git/alvinhtml/alvinblog/tree/master

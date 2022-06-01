FROM node:16.15.0

WORKDIR /VolvoTest
ADD . /VolvoTest

RUN npm install

ENTRYPOINT ["bash", "run.sh"]
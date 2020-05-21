# TODO: 참조하여 개선하기
# FROM gatsbyjs/gatsby:onbuild as build
# FROM gatsbyjs/gatsby
# COPY --from=build /app/public /pub

FROM node:10 AS builder

WORKDIR /proj
COPY package.json /proj
COPY yarn.lock /proj
RUN yarn

COPY . /proj
RUN yarn build

FROM nginx:1.17-alpine

# nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
RUN rm -rf /etc/nginx/conf.d
COPY conf/nginx.conf /etc/nginx/nginx.conf

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /proj/.docz/dist /usr/share/nginx/html

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]


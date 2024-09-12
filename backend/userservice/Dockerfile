FROM eclipse-temurin:22.0.2_9-jre-alpine

# Run the applications as non-root user
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

ARG DEPENDENCY=target/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY ${DEPENDENCY}/META-INF /app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /app

EXPOSE 8080
ENTRYPOINT ["java","-cp","app:app/lib/*","com.netflixclone.userservice.UserserviceApplication"]

#ARG JAR_FILE=target/userservice-0.0.1-SNAPSHOT.jar
#
#WORKDIR /app
#
#COPY ${JAR_FILE} /app/user-api.jar

#EXPOSE 8080

#ENTRYPOINT ["java", "-jar", "user-api.jar"]
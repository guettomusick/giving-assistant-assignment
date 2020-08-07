# /bin/bash

docker exec -i giving-assistant-assignment_mongo-cms_1 sh -c 'mongorestore --archive --drop' < testData.dump
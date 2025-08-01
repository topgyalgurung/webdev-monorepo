# aws_data

1. Redshift:
  - First [create Redshift cluster](https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-sample-data-load-create-cluster.html)
  - Set up cluster with [Iam Role](https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-create-an-iam-role.html): select redshift aws service, use case Reshift-customizable, Permission:AmazonS3ReadOnlyAccess,role name eg: myRedShiftRole
  - copy the Role ARN to use in COPY command to load data from Query Editor 
  - Doc: [Load Sample data from Amazon S3](https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-create-sample-db.html)
  - Then Query Editor create schema 
      - create schema
      - create table
      - then load data from s3 using COPY command
        ``` 
            copy users from 's3://<myBucket>/tickit/allusers_pipe.txt' 
            credentials 'aws_iam_role=<iam-role-arn>' 
            delimiter '|' region '<aws-region>';
        ```

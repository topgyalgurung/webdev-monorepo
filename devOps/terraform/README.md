# 🌐 Terraform Infrastructure as Code

Manage cloud infrastructure using Terraform — a declarative, version-controlled approach to provisioning resources like servers and databases.

---

## 🛠 What This Project Covers

- Use **Terraform** to spin up, update, and tear down cloud resources (e.g., EC2 instances).
- Maintain infrastructure as code — all config is version controlled.
- One source of truth using `terraform.tfstate`.

---

## 🚀 Benefits of Terraform

- ✅ **Multi-cloud** support (unlike AWS-only CloudFormation)  
- 🧠 **Stateful** — tracks infrastructure state  
- 🧾 **Declarative** — define end state, Terraform handles the rest  
- 🔁 Reduces manual error-prone click-ops  
- 💵 Cost savings & improved **disaster recovery**  
- 🔍 **Scalable** via variables and `.tfvars` file

---

## 📂 Project Structure

- `main.tf` – Declare resources (e.g., EC2 instance)  
- `variables.tf` – Define input variables  
- `terraform.tfvars` – Set key-value pairs for scalable config  
- `output.tf` – Output data like public IP  
- `terraform.tfstate` – Tracks actual infrastructure state

---

## ⚙️ Basic Commands

```bash
terraform init        # Initialize project
terraform apply       # Apply infrastructure changes
terraform destroy     # Tear down resources
terraform output      # Show output values (e.g. public IP)
```

### Implementation tf file example:

#### main.tf
```tf

# provider block
provider "aws"{
    profile = "default"
    region = "us-east-1"
}

# resource block 
resource "aws_instance" "app-server"{
    # ami id ie. amazon linux 2 server
    ami           = "ami-02457590d33d576c3"
    #instance_type = "t2.micro"
    instance_type = var.ec2_instance_type

    tags = {
        # Name = "MyTerraformInstance"
        Name = var.instance_name
    }
}

# VPC
resource "aws_vpc" "my_test_vpc"{
    cidr_block = var.vpc_cidr

    tags = {
        Name = var.vpc_name
    }
}

# Subnet 
resource "aws_subnet" "my_test_subnet"{
    vpc_id = aws_vpc.my_test_vpc.id
    cidr_block = var.subnet_cidr

    tags = {
        Name = var.subnet_name
    }
}


# create a route to internet 
resource "aws_internet_gateway" "my_ig"{
    vpc_id = aws_vpc.my_test_vpc.id

    tags = {
        Name = var.igw_name
    }
}

# create new route table with IGW
resource "aws_route_table" "public_rt"{
    vpc_id = aws_vpc.my_test_vpc.id

    route{
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.my_ig.id
    }
    tags = {
        Name = var.igw_name
    }
}

# associate route table with subnet 
resource "aws_route_table_association" public_1_rt_assoc"{
    subnet_id = aws_subnet.my_test_subnet.id
    route_table_id = aws_route_table.public_rt.id
}

# create new security group open to HTTP traffic
resource "aws_security_group" app_sg" {
    name = "HTTP"
    vpc_id = aws_vpc.my_test_vpc.id

    ingress{
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress{
        from_port = 0
        to_port = 0
        protocol = -1
        cidr_blocks = ["0.0.0.0/0"]


# create EC2 instance
resource "aws_instance" "app_instance"{
    ami = var.ec2_ami
    instance_type="t2.micro"

    subnet_id = aws_subnet.my_test_subnet.id
    vpc_security_group_ids = [aws_security_group.app_sg.id]
    associate_public_ip_address = true 

    user_data = <<-EOF
    #!/bin/bash -ex

    amazon-linux-extras install nginx1 -y
    echo "<h1>This is new server </h1>" > /usr/share/nginx/html/index.html
    systemctl enable nginx
    systemctl start nginx
    EOF
    
    tags = {
        "Name": var.ec2_name
    }
}

```

#### variables.tf
```tf

variable "instance_name"{
    description = "Value of the Name tag for the EC2 instance"
    type = string
    default = "MyNewInstance"
}

variable "ec2_instance_type" {
    description = "AWS EC2 instance type "
    type = string
    default = "t2.micro"
}
```

#### output.tf
```tf
output "instance_id" {
    description = "ID of the EC2 instance"
    value = aws_instance.app-server.id
}

output "instance_public_ip"{
    description = "Public IP address of the EC2 instance"
    value = aws_instance.app-server.public_ip
}
```

### terraform.tfvars
```

# EC2 
ec2_instance_type = "t2.micro"
instance_name ="MyInstanceNameFromFile"

# public subnet 
subnet_cidr = "10.0.1/24"
subnet_name = "MyTestSubnet"

# internet gateway 
igw_name = "MyTestIGW"

# vpc 
vpc_name = "MyTestVPC"
```

### To override a variable directly:
```bash1
terraform apply -var="instance_name=MyNewNameEC2"
```

### 📌 Example Use Case

Spin up multiple EC2 instances, track public IP for deployment pipelines, and maintain all changes via Git version control for reproducibility.

from django.db import migrations


def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(first_name="Customer 001", last_name="Customer 001", email="customer001@email.com", phone="00000000",
             address="Customer 001 Address", description="Customer 001 description").save()
    Customer(first_name="Customer 002", last_name="Customer 002", email="customer001@email.com", phone="00000000",
             address="Customer 002 Address", description="Customer 002 description").save()
    Customer(first_name="Customer 003", last_name="Customer 003", email="customer001@email.com", phone="00000000",
             address="Customer 003 Address", description="Customer 003 description").save()
    Customer(first_name="Customer 004", last_name="Customer 004", email="customer001@email.com", phone="00000000",
             address="Customer 004 Address", description="Customer 004 description").save()
    Customer(first_name="Customer 005", last_name="Customer 005", email="customer001@email.com", phone="00000000",
             address="Customer 005 Address", description="Customer 005 description").save()
    Customer(first_name="Customer 006", last_name="Customer 006", email="customer001@email.com", phone="00000000",
             address="Customer 006 Address", description="Customer 006 description").save()
    Customer(first_name="Customer 007", last_name="Customer 007", email="customer001@email.com", phone="00000000",
             address="Customer 007 Address", description="Customer 007 description").save()
    Customer(first_name="Customer 008", last_name="Customer 008", email="customer001@email.com", phone="00000000",
             address="Customer 008 Address", description="Customer 008 description").save()
    Customer(first_name="Customer 009", last_name="Customer 009", email="customer001@email.com", phone="00000000",
             address="Customer 009 Address", description="Customer 009 description").save()
    Customer(first_name="Customer 0010", last_name="Customer 0010", email="customer001@email.com", phone="00000000",
             address="Customer 0010 Address", description="Customer 0010 description").save()
    Customer(first_name="Customer 0011", last_name="Customer 0011", email="customer001@email.com", phone="00000000",
             address="Customer 0011 Address", description="Customer 0011 description").save()


class Migration(migrations.Migration):
    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]

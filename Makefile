.PHONY: rebuild start stop get_init_url create_admin generate-seed-migrations

rebuild:
	docker compose down 2>/dev/null || true
	docker compose run --rm --entrypoint sh app -c "rm -rf /pb/pb_data/*" 2>/dev/null || rm -rf pb_data
	docker compose up -d --build

start:
	docker compose up -d

stop:
	docker compose down

get_init_url:
	docker compose logs app | grep pbinstall

create_admin:
	docker compose exec app ./pocketbase superuser upsert admin@example.com adminpassword
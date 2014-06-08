# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140608160146) do

  create_table "answers", force: true do |t|
    t.integer  "slider"
    t.integer  "question_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id"

  create_table "attendees_events", id: false, force: true do |t|
    t.integer "event_id",    null: false
    t.integer "attendee_id", null: false
  end

  create_table "events", force: true do |t|
    t.string   "title"
    t.integer  "organization_id"
    t.integer  "primary_focus_id"
    t.integer  "secondary_focus_id"
    t.integer  "event_type"
    t.string   "location"
    t.integer  "seats"
    t.decimal  "cost"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
    t.date     "held_on"
    t.time     "held_at"
  end

  add_index "events", ["organization_id"], name: "index_events_on_organization_id"
  add_index "events", ["primary_focus_id"], name: "index_events_on_primary_focus_id"
  add_index "events", ["secondary_focus_id"], name: "index_events_on_secondary_focus_id"

  create_table "events_scopes", id: false, force: true do |t|
    t.integer "event_id", null: false
    t.integer "scope_id", null: false
  end

  create_table "focus", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "color"
  end

  create_table "organizations", force: true do |t|
    t.string   "name"
    t.integer  "owner_id"
    t.integer  "plan_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "organizations", ["owner_id"], name: "index_organizations_on_owner_id"
  add_index "organizations", ["plan_id"], name: "index_organizations_on_plan_id"

  create_table "organizations_users", id: false, force: true do |t|
    t.integer "organization_id", null: false
    t.integer "user_id",         null: false
  end

  create_table "packages", force: true do |t|
    t.string   "name"
    t.decimal  "cost"
    t.boolean  "trial"
    t.boolean  "negotiated"
    t.datetime "renew_at"
    t.boolean  "user_selectable"
    t.integer  "billing_schedule", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pictures", force: true do |t|
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "event_id"
  end

  add_index "pictures", ["event_id"], name: "index_pictures_on_event_id"

  create_table "polls", force: true do |t|
    t.integer  "version"
    t.string   "name"
    t.string   "description"
    t.integer  "organization_id"
    t.integer  "question_id"
    t.boolean  "isValid"
    t.datetime "creationDateTime"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "polls", ["organization_id"], name: "index_polls_on_organization_id"
  add_index "polls", ["question_id"], name: "index_polls_on_question_id"

  create_table "questions", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "slidermin"
    t.integer  "slidermax"
    t.boolean  "hasAllocation"
    t.integer  "primary_focus_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "questions", ["primary_focus_id"], name: "index_questions_on_primary_focus_id"

  create_table "questions_secondary_focus", id: false, force: true do |t|
    t.integer "question_id",       null: false
    t.integer "secondary_focu_id", null: false
  end

  create_table "scopes", force: true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "taggings", force: true do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true

  create_table "tags", force: true do |t|
    t.string  "name"
    t.integer "taggings_count", default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true

  create_table "userpolls", force: true do |t|
    t.integer  "poll_id"
    t.integer  "answer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "userpolls", ["answer_id"], name: "index_userpolls_on_answer_id"
  add_index "userpolls", ["poll_id"], name: "index_userpolls_on_poll_id"
  add_index "userpolls", ["user_id"], name: "index_userpolls_on_user_id"

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end

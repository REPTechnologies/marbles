require 'rails_helper'

describe Scope, :type => :model do
  it "has a valid factory" do
    expect(build(:scope)).to be_valid
  end
end

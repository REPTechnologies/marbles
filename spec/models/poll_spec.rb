require 'spec_helper'

describe Poll do
  it "has a valid factory" do
    expect(build(:poll)).to be_valid
  end
end

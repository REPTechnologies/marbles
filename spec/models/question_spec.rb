require 'spec_helper'

describe Question do
  it "has a valid factory" do
    expect(build(:question)).to be_valid
  end
end

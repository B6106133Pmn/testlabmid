import (
    "github.com/facebook/ent"
    "github.com/facebook/ent/schema/field"
    "github.com/facebook/ent/schema/edge"

)
// Prefix holds the schema definition for the Prefix entity.
type Prefix struct {
    ent.Schema
}

// Fields of the Prefix.
func (Prefix) Fields() []ent.Field {
    return []ent.Field{
        field.String("prefix").NotEmpty(),
    }
}

// Edges of the Prefix.
func (Prefix) Edges() []ent.Edge {
    return []ent.Edge{
        edge.To("prefix_user", User.Type).StorageKey(edge.Column("user_id")),
    }
}
